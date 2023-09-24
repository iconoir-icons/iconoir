import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HeadsetBoltSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HeadsetBoltSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 13L10 17H14L11.5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13.5V13C4 8.02944 7.58172 4 12 4C16.4183 4 20 8.02944 20 13V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17.4382V15.5614C2 14.6436 2.62459 13.8437 3.51493 13.6211L4 13.4998L5.25448 13.1862C5.63317 13.0915 6 13.3779 6 13.7683V19.2313C6 19.6217 5.63317 19.9081 5.25448 19.8134L3.51493 19.3785C2.62459 19.1559 2 18.356 2 17.4382Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.4382V15.5614C22 14.6436 21.3754 13.8437 20.4851 13.6211L20 13.4998L18.7455 13.1862C18.3668 13.0915 18 13.3779 18 13.7683V19.2313C18 19.6217 18.3668 19.9081 18.7455 19.8134L20.4851 19.3785C21.3754 19.1559 22 18.356 22 17.4382Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
