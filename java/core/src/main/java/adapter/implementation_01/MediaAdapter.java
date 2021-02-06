package adapter.implementation_01;

import adapter.implementation_01.mediaPlayers.MP4Player;
import adapter.implementation_01.mediaPlayers.VLCPlayer;

public class MediaAdapter implements MediaPlayer {
  AdvancedMediaPlayer advancedMediaPlayer;
  public MediaAdapter(String audioType) {
    if (audioType.equalsIgnoreCase("vlc")) {
      advancedMediaPlayer = new VLCPlayer();
    }
    if (audioType.equalsIgnoreCase("mp4")) {
      advancedMediaPlayer = new MP4Player();
    }
  }

  @Override
  public void play(String audioType, String fileName) {
    if (audioType.equalsIgnoreCase("vlc")) {
      advancedMediaPlayer.playVLC(fileName);
    } else if (audioType.equalsIgnoreCase("mp4")) {
      advancedMediaPlayer.playMP4(fileName);
    }
  }
}
