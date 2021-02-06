package adapter.implementation_01.mediaPlayers;

import adapter.implementation_01.AdvancedMediaPlayer;

public class VLCPlayer implements AdvancedMediaPlayer {
  @Override
  public void playVLC(String filename) {
    System.out.println("VLC::" + filename);
  }

  @Override
  public void playMP4(String filename) {
    // pass
  }
}
