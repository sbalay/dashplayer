import { MediaPlayer } from 'dashjs';

const urls = [
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/ec/4e/11/72/753145b58ece14dc026a978e/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/52/69/02/aa/5d6046f38f8c776dd55c2d59/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/47/03/50/d9/f2c5482bb11448dc1cc111dd/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/b8/29/85/6a/31fb4e2699e00dd0f5a424e9/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/df/c9/a4/4f/95f94b17b7110693b0c715f0/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/d6/cd/61/f8/b8d84dce8e8c742cbb5baf3e/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/8e/15/a8/e8/1eb344c488beac765bfd24d3/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/c7/91/03/23/f18f43b1b13638d36533d532/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/e6/f4/9b/25/9b184570affd14011f5e6281/dash.mpd',
  'https://demo-bucket-dash-issue.s3.amazonaws.com/public/52/69/02/aa/5d6046f38f8c776dd55c2d59/dash.mpd'
];

urls.forEach((url, index) => {
  const player = MediaPlayer().create();
  player.getDebug().setLogToBrowserConsole(true);
  player.initialize(document.getElementById(`video${index}`), url, index === 0);
});
