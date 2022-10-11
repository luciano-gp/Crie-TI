import express, {Express} from 'express';
import path from 'path';
const app = express();
app.use(express.static(path.join(__dirname)));

app.listen(8080, () => {
    console.log("Front online!");
});
