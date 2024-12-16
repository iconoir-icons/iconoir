function template(name, svg) {
  return `
import 'package:flutter/widgets.dart' as widgets;
import 'package:flutter_svg/flutter_svg.dart';

class ${name} extends widgets.StatelessWidget {
  final widgets.Color? color;
  final double? width;
  final double? height;

  const ${name}({widgets.Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  widgets.Widget build(widgets.BuildContext context) => SvgPicture.string(
        '''
${svg}''',
        colorFilter:
            color != null ? widgets.ColorFilter.mode(color!, widgets.BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
`;
}

export default template;
