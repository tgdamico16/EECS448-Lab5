let links = ["https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop_2x/f_auto/v1623959459/chiefs/khzpdwroubzinsqt38fx.jpg",
            "https://arrowheadaddict.com/wp-content/uploads/imagn-images/2018/08/19094722.jpeg",
            "https://arrowheadaddict.com/wp-content/uploads/getty-images/2016/04/1198186451.jpeg",
            "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/chiefs/ilqz94s5kdaxkrfkc4kj.jpg",
            "https://ewscripps.brightspotcdn.com/dims4/default/5be682d/2147483647/strip/true/crop/1706x960+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F24%2F8c%2F32d8aa5b4f62939bd99a42b14c2a%2Fgeha-field-stadium-aerial-fireworks-white.jpg"];
let picIndex = 0;
window.addEventListener("load", () => {
    document.getElementById("pics").src = links[0];
});
function prevPic(){
    picIndex --;
    if (picIndex < 0) picIndex = 4;
    document.getElementById("pics").src = links[picIndex];
}
function nextPic(){
    picIndex++;
    if (picIndex > 4) picIndex = 0;
    document.getElementById("pics").src = links[picIndex];
}