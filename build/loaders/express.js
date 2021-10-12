"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
let FeedBackData = [];
exports.default = ({ app }) => {
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
        res.json({ message: "Hello from server!" });
    });
    app.get("/feedback", (req, res) => {
        res.status(200).send(FeedBackData);
    });
    app.get("/feedback/:id", (req, res) => {
        const feedback = FeedBackData.filter((fd) => fd.id === parseInt(req.params.id));
        res.status(200).send(feedback);
    });
    app.post("/createFeedback", (req, res) => {
        console.log(req.body);
        const _id = FeedBackData.length === 0 ? 1 : FeedBackData[FeedBackData.length - 1].id + 1;
        const feedback = Object.assign({ "id": _id }, req.body);
        console.log(feedback);
        FeedBackData.push(feedback);
        res.json({ message: "Saved Data" });
    });
    app.put("/editFeedback/:id", (req, res) => {
        console.log(req.params.id);
        const index = FeedBackData.findIndex((fd) => fd.id === parseInt(req.params.id));
        FeedBackData[index].name = req.body.name;
        FeedBackData[index].age = req.body.age;
        FeedBackData[index].feedback = req.body.feedback;
        res.json({ message: FeedBackData });
    });
    app.delete("/delete/feedback/:id", (req, res) => {
        console.log(typeof req.params.id);
        const index = FeedBackData.findIndex((fd) => fd.id === parseInt(req.params.id));
        console.log(index);
        index !== -1 && FeedBackData.splice(index, 1);
        res.json({ message: FeedBackData });
    });
};
//# sourceMappingURL=express.js.map