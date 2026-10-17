
import "dotenv/config";
import app from "./src/app.js";
import connectAllDatabases from "./src/config/connectAllDatabases.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectAllDatabases();

    const server = app.listen(PORT, () => {
      console.log(
        `MONIR GROUP API running on http://localhost:${PORT}`
      );
    });

    const shutdown = async () => {
      console.log("Shutting down MONIR GROUP API...");

      server.close(async () => {
        const connections = [
          import("./src/config/monirEnterpriseDB.js"),
          import("./src/config/monirAcademyDB.js"),
          import("./src/config/monirFriendAssociationDB.js"),
          import("./src/config/agriculturalTradingDB.js"),
        ];

        try {
          const modules = await Promise.all(connections);

          await Promise.all(
            modules.map((module) => module.default.close())
          );
        } catch (error) {
          console.error("Database shutdown error:", error.message);
        }

        process.exit(0);
      });
    };

    process.once("SIGINT", shutdown);
    process.once("SIGTERM", shutdown);
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
