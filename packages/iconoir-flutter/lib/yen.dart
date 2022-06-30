import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Yen extends StatelessWidget {
  const Yen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Yen.svg');
}
