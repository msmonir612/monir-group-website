
import monirEnterpriseDB from "./monirEnterpriseDB.js";
import monirAcademyDB from "./monirAcademyDB.js";
import monirFriendAssociationDB from "./monirFriendAssociationDB.js";
import agriculturalTradingDB from "./agriculturalTradingDB.js";

const databases = [
  ["M/S MONIR ENTERPRISE", monirEnterpriseDB],
  ["MONIR ACADEMY", monirAcademyDB],
  ["MONIR FRIEND ASSOCIATION", monirFriendAssociationDB],
  ["AGRICULTURAL TRADING", agriculturalTradingDB],
];

const connectAllDatabases = async () => {
  try {
    for (const [name, connection] of databases) {
      await connection.asPromise();
      await connection.db.admin().ping();

      console.log(
        `MongoDB connected: ${name} -> ${connection.name}`
      );
    }

    console.log("All four MONIR GROUP databases connected successfully.");
  } catch (error) {
    console.error(
      "Database startup failed:",
      error.message
    );

    await Promise.all(
      databases.map(([, connection]) =>
        connection.close().catch(() => {})
      )
    );

    throw error;
  }
};

export default connectAllDatabases;
