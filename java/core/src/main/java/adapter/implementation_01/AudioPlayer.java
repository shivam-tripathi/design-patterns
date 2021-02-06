package adapter.implementation_01;


// Audio player uses adapter to play some other types of mediaType as well
public class AudioPlayer implements MediaPlayer {
  @Override
  public void play(String audioType, String fileName) {
    if (audioType.equalsIgnoreCase("mp3")) {
      System.out.println("MP3::" + fileName);
    } else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
      MediaPlayer mediaPlayer = new MediaAdapter(audioType);
      mediaPlayer.play(audioType, fileName);
    } else {
      System.out.println("NO_SUPPORT::" + audioType);
    }
  }
}
