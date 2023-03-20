import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RoundedMirror extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RoundedMirror({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 4.5L13 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7L11.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
