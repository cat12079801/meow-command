import { Command } from 'commander';
const program = new Command();

program
    .option('-r, --random', 'output cat facial expressions randomly')

program.parse(process.argv);
const options = program.opts();

interface OutputInterface {
    emoji: string;
    text: string;
}
const output: OutputInterface = {
    'emoji': '😺',
    'text': 'にゃーん'
}

if (options.random) {
    const cats = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿'];
    output.emoji = cats[Math.floor(Math.random() * cats.length)];
}

console.log(`${output.emoji}<${output.text}`);
