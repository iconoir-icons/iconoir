import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WifiTagSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const WifiTagSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.25C4.27208 2.25 1.25 5.27208 1.25 9V15C1.25 18.7279 4.27208 21.75 8 21.75H16C19.7279 21.75 22.75 18.7279 22.75 15V9C22.75 5.27208 19.7279 2.25 16 2.25H8ZM12.5675 15.2508C12.8446 14.9429 12.8196 14.4687 12.5117 14.1916C12.2038 13.9145 11.7296 13.9394 11.4525 14.2473L11.4425 14.2584C11.1654 14.5663 11.1904 15.0405 11.4983 15.3176C11.8062 15.5947 12.2804 15.5697 12.5575 15.2619L12.5675 15.2508ZM16.4239 11.7302C14.2237 9.08996 9.77633 9.08997 7.57618 11.7301C7.311 12.0483 6.83807 12.0913 6.51987 11.8261C6.20167 11.5609 6.15868 11.088 6.42386 10.7698C9.22371 7.41007 14.7763 7.41005 17.5762 10.7699C17.8414 11.0881 17.7984 11.561 17.4802 11.8262C17.1619 12.0914 16.689 12.0484 16.4239 11.7302ZM9.60005 13.7C10.8 12.1 13.2 12.1 14.4 13.7C14.6486 14.0314 15.1187 14.0986 15.45 13.85C15.7814 13.6015 15.8486 13.1314 15.6 12.8C13.8 10.4 10.2 10.4 8.40004 12.8C8.15152 13.1314 8.21868 13.6015 8.55005 13.85C8.88142 14.0986 9.35152 14.0314 9.60005 13.7Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
