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
    'emoji': 'πΊ',
    'text': 'γ«γγΌγ'
}

if (options.random) {
    const cats = ['πΊ', 'πΈ', 'πΉ', 'π»', 'πΌ', 'π½', 'π', 'πΏ'];
    output.emoji = cats[Math.floor(Math.random() * cats.length)];
}

console.log(`${output.emoji}<${output.text}`);
