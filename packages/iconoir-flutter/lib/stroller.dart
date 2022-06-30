import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Stroller extends StatelessWidget {
  const Stroller({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Stroller.svg');
}
