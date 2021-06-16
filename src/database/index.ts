// import { createConnection, getConnectionOptions } from 'typeorm';

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'database_dtractian'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });

// import { createConnection } from 'typeorm';

// createConnection({
//   type: "mongodb",
//   host: "localhost",
//   port: 27017,
//   database: "dtractian"
// });

import {createConnection} from 'typeorm';

createConnection();

// import {createConnection, Connection} from "typeorm";

//  const connection: Connection =  createConnection({
//     type: "mongodb",
//     host: "localhost",
//     port: 27017,
//     database: "dtractian"
// });