package adapter.implementation_01;

public class AdapterDemo {
  public static void main(String[] args) {
    AudioPlayer audioPlayer = new AudioPlayer();
    audioPlayer.play("mp3", "Song");
    audioPlayer.play("mp4", "Video");
    audioPlayer.play("vlc", "VLC Video");
    audioPlayer.play("avi", "AVI file");
  }
}
