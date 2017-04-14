'use strict';
var modifyFilename = require('modify-filename');

module.exports = function (pth, hash,type) {
	if (arguments.length <2) {
		throw new Error('`path` and `hash` required');
	}

	return modifyFilename(pth, function (filename, ext) {
//        return filename + '-' + hash + ext;
//        修改:用参数形式加后面url('../img/one.jpg?v=28bd4f6d18');
        if(type==="part"){
            return filename + ext;
        }else{
            return filename + '-' + hash + ext;
        }
	});
};

module.exports.revert = function (pth, hash) {
	if (arguments.length !== 2) {
		throw new Error('`path` and `hash` required');
	}

	return modifyFilename(pth, function (filename, ext) {
		return filename.replace(new RegExp('-' + hash + '$'), '') + ext;
	});
};
