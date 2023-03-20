import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LongArrowLeftUp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LongArrowLeftUp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 10.5L8 7L11.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7V13C8 15.2091 9.79086 17 12 17H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
