import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Okrs extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Okrs({Key? key, this.color, this.width, this.height}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3C16.8954 3 16 3.89543 16 5C16 6.10457 16.8954 7 18 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5L13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12L13 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 21.2426L18.1213 19.1213M18.1213 19.1213L20.2426 17M18.1213 19.1213L16 17M18.1213 19.1213L20.2426 21.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
