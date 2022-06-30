import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EyeClose extends StatelessWidget {
  const EyeClose({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EyeClose.svg');
}
