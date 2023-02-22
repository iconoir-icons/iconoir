import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VueJs extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VueJs({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20.5L22.5 4H18.5L12 14L5.5 4H1.5L12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 4H14.5L12 7.5L9.5 4H5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
