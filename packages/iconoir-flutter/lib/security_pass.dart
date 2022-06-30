import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SecurityPass extends StatelessWidget {
  const SecurityPass({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SecurityPass.svg');
}
