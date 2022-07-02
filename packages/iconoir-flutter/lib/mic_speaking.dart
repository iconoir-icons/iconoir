import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MicSpeaking extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MicSpeaking({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.5"/>
<path d="M5 3V5M1 2V6M19 3V5M23 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 10V11C5 14.866 8.13401 18 12 18V18V18C15.866 18 19 14.866 19 11V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V22M12 22H9M12 22H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
