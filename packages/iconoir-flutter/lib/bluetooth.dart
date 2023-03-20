import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Bluetooth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Bluetooth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 8L17.25 16.5L11.75 22V2L17.25 7.5L6.75 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
