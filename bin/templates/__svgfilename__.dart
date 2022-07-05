import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class __icon__(pascalCase) extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const __icon__(pascalCase)({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
__svgfilecontent__''',
        color: color,
        width: width,
        height: height,
      );
}
