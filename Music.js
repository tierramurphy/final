/**
 * Created by tierra_murphy on 12/9/16.
 */
function LoopSong(id){
    var song=document.getElementById(id);
    song.loop= true;
    song.load();
}