import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ServerConnection extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ServerConnection({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.01L9.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.01L12.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
