package adapter.implementation_01.mediaPlayers;

import adapter.implementation_01.AdvancedMediaPlayer;

public class MP4Player implements AdvancedMediaPlayer {
  @Override
  public void playVLC(String filename) {
    // pass
  }

  @Override
  public void playMP4(String filename) {
    System.out.println("MP4::" + filename);
  }
}
