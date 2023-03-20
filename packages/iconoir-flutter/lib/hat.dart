import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hat extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Hat({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17V15C7 11.134 10.134 8 14 8C17.866 8 21 11.134 21 15V17H7ZM7 17H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6.01L14.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
