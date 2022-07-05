import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LongArrowLeftDown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LongArrowLeftDown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 13.5L8 17L11.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 17V11C8 8.79086 9.79086 7 12 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
