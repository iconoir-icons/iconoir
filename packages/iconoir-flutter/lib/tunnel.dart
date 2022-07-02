import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tunnel extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tunnel({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20H4V15M20 20V12C20 7.58172 16.4183 4 12 4C11.2057 4 10.4385 4.11575 9.71429 4.33129C6.40973 5.31477 4 8.37598 4 12V15M20 20L4 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9V10" stroke="currentColor" stroke-linecap="round"/>
<path d="M12 8V9" stroke="currentColor" stroke-linecap="round"/>
<path d="M8 7V8" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
