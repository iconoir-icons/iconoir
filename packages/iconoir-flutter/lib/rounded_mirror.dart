import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RoundedMirror extends StatelessWidget {
  const RoundedMirror({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RoundedMirror.svg');
}
