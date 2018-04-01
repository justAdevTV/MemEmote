export default function dataURItoBlob(dataURI) {
    dataURItoBlob = function(dataURI) {
        var array, binary, i;
        binary = atob(dataURI.split(",")[1]);
        array = [];
        i = 0;
        while (i < binary.length) {
          array.push(binary.charCodeAt(i));
          i++;
        }
        return new Blob([new Uint8Array(array)], {
          type: "image/jpeg"
        });
    };
}