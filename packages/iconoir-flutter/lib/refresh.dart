import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Refresh extends StatelessWidget {
  const Refresh({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Refresh.svg');
}
