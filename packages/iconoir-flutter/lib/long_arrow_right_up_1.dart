import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LongArrowRightUp1 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LongArrowRightUp1({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 7V13C15.5 15.2091 13.7091 17 11.5 17H4.5M15.5 7L19 10.5M15.5 7L12 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
