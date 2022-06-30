import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Golf extends StatelessWidget {
  const Golf({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Golf.svg');
}
