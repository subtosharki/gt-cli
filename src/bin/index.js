#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('../utils/utils.js');
const translate = require('@vitalets/google-translate-api');
if (sentence == '') {
	console.error("\nI can't see the entered sentence.\n");
	console.log('Enter tran --help to get started.\n');
	return;
}
translate(sentence, { to: language })
	.then((res) => {
		console.log('\n' + '\n' + res.text + '\n' + '\n');
	})
	.catch((err) => {
		console.error(err);
	});

const usage = '\nUsage: gt <lang_name> <phrase>';
const options = yargs
	.usage(usage)
	.option('l', {
		alias: 'languages',
		describe: 'List all supported languages.',
		type: 'boolean',
		demandOption: false,
	})
	.help(true).argv;

var sentence = utils.parseSentence(yargs.argv._);

if (yargs.argv._[0] == null) {
	utils.showHelp();
	return;
}

if (yargs.argv.l == true || yargs.argv.languages == true) {
	utils.showAll();
	return;
}

if (yargs.argv._[0]) var language = yargs.argv._[0].toLowerCase();
language = utils.parseLanguage(language);
