import app from './app';
import config from './config';



async function main() {
  try {
    
    app.listen(config.port, () => {
      console.log(`Database is connected 🔥🔥🔥`);
      console.log(`server is running from ${config.port} ✅✅✅`);
    });
  } catch (error) {
    console.log(`😭😭😭😭\n ${error}`);
  }
}
main();
