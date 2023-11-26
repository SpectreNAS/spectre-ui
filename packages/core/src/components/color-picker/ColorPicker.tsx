
export const ColorPicker = () => {

  return <div></div>
}

//x坐标转换饱和度
function xTransformSaturation(x: number, width: number) {
  return x / width
}

//饱和度转换x坐标
function saturationTransformX(saturation: number, width: number) {
  return saturation * width
}

//y坐标转换明度
function yTransformValue(y: number, height: number) {
  return 1 - y / height
}

//明度转换y坐标
function valueTransformY(value: number, height: number) {
  return (1 - value) * height
}
