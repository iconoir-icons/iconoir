import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MailIn extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MailIn({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9L9.5 12L14 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H16C17.1046 5 18 5.89543 18 7V9" stroke="currentColor" stroke-linecap="round"/>
<path d="M23 14H17M17 14L20 11M17 14L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
