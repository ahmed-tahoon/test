"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFilter = void 0;
const FileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
        req.fileValidationError = 'only image files allowed';
        return callback(null, false);
    }
    else if (!file) {
        req.fileValidationError = 'only image files allowed';
        return callback(null, false);
    }
    callback(null, true);
};
exports.FileFilter = FileFilter;
//# sourceMappingURL=file-validator.js.map