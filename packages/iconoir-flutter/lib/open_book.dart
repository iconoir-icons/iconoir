import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OpenBook extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OpenBook({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143" stroke="currentColor"   stroke-linecap="round"/>
<path d="M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143" stroke="currentColor"   stroke-linecap="round"/>
<path d="M14 19L22 19" stroke="currentColor"   stroke-linecap="round"/>
<path d="M10 19L2 19" stroke="currentColor"   stroke-linecap="round"/>
<path d="M12 21C12 19.8954 12.8954 19 14 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C12 19.8954 11.1046 19 10 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
