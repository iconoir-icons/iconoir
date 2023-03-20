import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LongArrowDownRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LongArrowDownRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 19.25L16.75 15.75L13.25 12.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.75 15.75H10.75C8.54086 15.75 6.75 13.9591 6.75 11.75V4.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
