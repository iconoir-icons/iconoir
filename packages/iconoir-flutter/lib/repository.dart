import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Repository extends StatelessWidget {
  const Repository({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Repository.svg');
}
