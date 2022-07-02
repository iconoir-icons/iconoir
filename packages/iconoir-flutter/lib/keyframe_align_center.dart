import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class KeyframeAlignCenter extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const KeyframeAlignCenter({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7001 12.3748L12.4685 16.4143C12.2283 16.7146 11.7717 16.7146 11.5315 16.4143L8.29985 12.3748C8.12455 12.1557 8.12455 11.8443 8.29985 11.6252L11.5315 7.58565C11.7717 7.28541 12.2283 7.28541 12.4685 7.58565L15.7001 11.6252C15.8755 11.8443 15.8755 12.1557 15.7001 12.3748Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
