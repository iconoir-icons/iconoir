import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FolderAlert extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FolderAlert({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3L18 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11.01L18.01 10.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 7V11V19.4C22 19.7314 21.7314 20 21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7H12.722C12.5787 7 12.4402 6.94876 12.3315 6.85555L9.16852 4.14445C9.05977 4.05124 8.92127 4 8.77805 4H2.6C2.26863 4 2 4.26863 2 4.6V11H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
