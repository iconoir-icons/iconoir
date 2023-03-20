import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OrganicFood extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const OrganicFood({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C9 18 9.9 14.2588 12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.1857 7.24133L16.5601 11.1306C16.8031 13.6536 14.9114 15.9001 12.3883 16.143C9.91266 16.3814 7.67 14.5718 7.43162 12.0962C7.19324 9.62055 9.00691 7.4204 11.4826 7.18203L15.6293 6.78274C15.9096 6.75575 16.1587 6.96107 16.1857 7.24133Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
