import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PriorityUpSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PriorityUpSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3839_8163)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9546 0.893452C12.4274 0.366244 11.5726 0.366246 11.0454 0.893453L0.893941 11.0449C0.366732 11.5721 0.366734 12.4269 0.893941 12.9541L11.0454 23.1056C11.5726 23.6328 12.4274 23.6328 12.9546 23.1056L23.1061 12.9541C23.6333 12.4269 23.6333 11.5721 23.1061 11.0449L12.9546 0.893452ZM12.5303 6.46967C12.3878 6.32714 12.1939 6.24798 11.9923 6.25004C11.7908 6.2521 11.5986 6.33519 11.459 6.4806L7.45896 10.6473C7.1721 10.9461 7.18179 11.4209 7.4806 11.7077C7.77941 11.9946 8.25419 11.9849 8.54104 11.6861L11.25 8.86423V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V8.81066L15.4697 11.5303C15.7626 11.8232 16.2374 11.8232 16.5303 11.5303C16.8232 11.2374 16.8232 10.7626 16.5303 10.4697L12.5303 6.46967Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3839_8163">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}