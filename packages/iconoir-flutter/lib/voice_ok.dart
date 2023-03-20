import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VoiceOk extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VoiceOk({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8L8 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9L20 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9L4 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 6L16 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 19.5L17.5 21.5L22.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
