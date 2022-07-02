import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SoundOff extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SoundOff({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 14L19.0005 12M21 10L19.0005 12M19.0005 12L17 10M19.0005 12L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14V10C3 9.44772 3.44772 9 4 9H6.69722C6.89465 9 7.08766 8.94156 7.25192 8.83205L11.4453 6.03647C12.1099 5.59343 13 6.06982 13 6.86852V17.1315C13 17.9302 12.1099 18.4066 11.4453 17.9635L7.25192 15.1679C7.08766 15.0584 6.89465 15 6.69722 15H4C3.44772 15 3 14.5523 3 14Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
